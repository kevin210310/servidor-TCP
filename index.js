const net = require('net');

const server = net.createServer((socket, err) => {
    socket.write('Development server\r\n');
    socket.on('data', function(data, err){

        let data = Buffer.from(data, 'base64').toString('ascii');

        try {

            const objeto = JSON.parse(data);

            console.log(objeto);
            
        } catch (error) {

            console.log("error en el paquete de datos");
            
        }

        socket.write(data);
    });

    socket.on('error', function(err) {
		console.log(err)
	})

	socket.on('close', function() {
		console.log('Connection closed');
	});
});
server.listen(51021, '0.0.0.0');