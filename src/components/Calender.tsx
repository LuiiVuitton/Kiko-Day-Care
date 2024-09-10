function Calender() {
  return (
    <div className="container my-4">
      <h2>Our Calendar</h2>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=c_9dfe30c99a26f5739dc76ad9d2388135eb2414680268f27eae2e38c5b9427986%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          title="Google Calendar"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Calender;
