# wrong design
# class EmailSender:
#     def send_email(self, message):
#         pass
    
# class SmsSender:
#     def send_sms(self, message):
#         pass
    
# class Notification:
#     def send(self, message, method):
#         if method == 'email':
#             EmailSender().send_email(message)
#         elif method == 'sms':
#             SmsSender().send_sms(message)
#         else:
#             raise ValueError('Invalid method')

from abc import ABC, abstractmethod

class MessageSender:
    @abstractmethod
    def send(self, message):
        pass
    
class EmailSender(MessageSender):
    def send(self, message):
        pass

class SmsSender(MessageSender):
    def send(self, message):
        pass
    
class Notification:
    def __init__(self, sender: MessageSender):
        self.sender = sender
        
    def send(self, message):
        self.sender.send(message)
        
# usage

email_sender = EmailSender()
sms_sender = SmsSender()

notification_email = Notification(email_sender)
notification_sms = Notification(sms_sender)
notification_email.send('Hello, this is an email notification.')

notification_sms.send('Hello, this is an SMS notification.')