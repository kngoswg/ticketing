import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@kostickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
