import SocketServer 
import time
def main():
    port = 6667
    host = '0.0.0.0'
class Service(SocketServer.BaseRequestHandler):
    def handle(self):
        #this handles the connection
        pass
class ThreadedService(SocketServer.ThreadingMixin, SocketServer.TCPServer, SocketServer.DatagramRequestHandler)