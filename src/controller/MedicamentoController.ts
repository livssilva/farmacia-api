import type { MedicamentoDTO } from "../interface/MedicamentoDTO.js";
import Medicamento from "../model/Medicamento.js";
import type { Request, Response } from "express";

class MedicamentoController extends Medicamento {

    static async todos(req: Request, res: Response): Promise<Response> {
        try {
            const listarMedicamento: Array<Medicamento> | null = await Medicamento.listarMedicamento();

            return res.status(200).json(listarMedicamento);
        } catch (error) {
            console.error(`Erro ao consultar medicamento. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possivel acessar a lista de medicamentos." });
        }
    }
        static async novo(req: Request, res: Response): Promise<Response> {
        try {
            const dadosRecebidosMedicamentos = req.body;

            const respostaMedicamento = await Medicamento.cadastrarMedicamento(dadosRecebidosMedicamentos);

            if (respostaMedicamento) {
                return res.status(201).json({ mensagem: "Medicamento cadastrado com sucesso." });
            } else {
                return res.status(400).json({ mensagem: "Erro ao cadastrar medicamento." });
            }
        } catch (error) {
            console.error(`Erro no modelo. ${error}`);

            return res.status(500).json({ mensagem: "Não foi possível inserir o medicamento" });
        }
    }
}

export default  MedicamentoController;