//var Accel = require('ui/accel');
//Accel.config({rate:90});

// menu.on('accelData', function(e) {
//   //console.log('Accel data: ' + JSON.stringify(e.accel));
//   var d =0;
//    if (e.accels[24].y>300) {
//       d = -1;
//     }else if (e.accels[24].y<-600){
//       d = +1;
//     }
//   var si = this._selection.itemIndex;
//   si = si + d;
//   if (si == this.state.sections[0].items.length) {si = 0;}
//   if (si < 0) {si = this.state.sections[0].items.length - 1;}
//   this.selection(0,si);
// });