interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

interface IMessageDto {
  to: IMailTo, 
  message: IMailMessage;
}

class EmailsService {
  sendMail({ to, message }: IMessageDto) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailsService;