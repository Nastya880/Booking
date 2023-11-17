const rooms = document.querySelectorAll('.room__item');

rooms.forEach((room) => {
  let toClickRoomBookingButton = false;

  const roomBookingButton = room.querySelector('.room__booking-button');
  const roomBooking = room.querySelector('.room__booking');
  const roomInfo = room.querySelector('.room__info');
  const roomWrapper = room.querySelector('.room__wrapper');
  const roomMotivator = room.querySelector('.room__motivator');
  const roomBooked = room.querySelector('.room__booked');

  const toggleBookingToBooked = (booking = 'flex', booked = 'flex', infoRemove = 'room__info', infoAdd = 'room__info-without-line', motivator = 'none', darkRoomContent = true) => {
    roomBooking.style.display = booking;
    roomBooked.style.display = booked;
    // motivator = roomMotivator && roomMotivator.style.display;
    if (roomMotivator) {
      roomMotivator.style.display = motivator;
    }
    roomInfo.classList.remove(infoRemove);
    roomInfo.classList.add(infoAdd);
    // roomContent.classList.toggle = darkRoomContent ? roomContent.classList.add('is-dark-content') : roomContent.classList.remove('is-dark-content');
    roomWrapper.classList.toggle = darkRoomContent ? roomWrapper.classList.add('is-dark-content') : roomWrapper.classList.remove('is-dark-content');
  };

  roomBookingButton.addEventListener('click', () => {
    toClickRoomBookingButton = true;
  });

  room.addEventListener('mouseout', () => {
    if (toClickRoomBookingButton) {
      toggleBookingToBooked('none');
    }
  });

  room.addEventListener('click', () => {
    if (roomBooking.style.display === 'none') {
      // console.log(roomBooking.style.display);
      toClickRoomBookingButton = false;
      toggleBookingToBooked('flex', 'none', 'room__info-without-line', 'room__info', 'flex', false);
    }
  });
});
