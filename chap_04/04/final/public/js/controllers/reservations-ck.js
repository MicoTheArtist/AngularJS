function ReservationsCtrl(e,t){e.setActive("reservations");e.reservations=t.query();e.reserveFlight=function(){t.save(e.reserve,function(t){e.reserve.origin="";e.reserve.destination="";e.reservations.push(t)})}};