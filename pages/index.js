export default function MaintenancePage() {
  return (
    <div className="vh">
      <div>
        <div className="wrap">
          <h1>Maintenance mode</h1>
          <h2>
            <p>
              Sorry for the inconvenience.
              <br />
              Our website is currently undergoing scheduled maintenance.
              <br />
              <br />
            </p>
          </h2>
          <p>Thank you for your understanding.</p>
        </div>
      </div>
      <style jsx global>{`
        html {
          width: 100%;
          height: 100%;
        }
        body {
          text-align: center;
          margin: 0px;
          padding: 0px;
          height: 100%;
          color: #fff;
          font-family: sans-serif;
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab
          );
          background-size: 400% 400%;
          animation: Gradient 15s ease infinite;
        }
        .vh {
          height: 100%;
          align-items: center;
          display: flex;
        }
        .vh > div {
          width: 100%;
          text-align: center;
          vertical-align: middle;
        }
        img {
          max-width: 100%;
        }
        .wrap {
          text-align: center;
        }
        .wrap h1 {
          font-size: 30px;
          font-weight: 700;
          margin: 0 0 90px;
        }
        .wrap h2 {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.6;
          margin: 0 0 80px;
        }
        @keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
