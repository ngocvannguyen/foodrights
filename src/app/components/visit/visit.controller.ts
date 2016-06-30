import {Email} from '../../common/models';
import {EmailService} from '../../common/services/email.service';

export class VisitController {
  public email:Email = new Email();

  /* @ngInject */
  constructor (private emailService:EmailService) {
  }

  public send() {
    this.emailService.send(this.email);
  }
}
