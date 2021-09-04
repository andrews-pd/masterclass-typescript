import { Request, Response } from "express";
import EmailsService from "../services/EmailService";

 const users = [
   { name: 'Andrews', email: 'andrews.santiago@passeidireto.com' }
 ];

 export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailsService();

    emailService.sendMail({
      to: { name: 'Andrews Santiago', email: 'andrews.santiago@passeidireto.com' },
      message: { subject: 'Bem vindo ao sitema', body: 'Seja bem-vendo' }
    });

    return res.send();
  }
 };