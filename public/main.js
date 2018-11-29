var socket = io.connect();
socket.on('greeting', function (data) {
    console.log(data);
});
  
document.addEventListener('DOMContentLoaded', main);
function main(){
   console.log(document.querySelectorAll('button'));
   const but1 = document.querySelectorAll('button')[0];
   but1.addEventListener('click', update1pos);

   const but2 = document.querySelectorAll('button')[1];
   but2.addEventListener('click', update2pos);

  function update1pos(){
    console.log("event listner works");
    socket.emit('update1pos', 'message');
   
   };
   function update2pos(){
      console.log("event listner works");
      socket.emit('update2pos', 'message');
   };
   
}

