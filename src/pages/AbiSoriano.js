
export default function AbiSoriano() {
  return (
    <div className="container">
      <main>
        <div className="underline">
          <h1 className="title">Hey, I'm Abi!</h1>
        </div>

        <p className="description">
          Hi! My name is Abi, and I am a Computer Science student at CU Boulder.
          I am originally from Denver, so Boulder isn't too far from home, but
          living away from home has still been a new experience for me. I enjoy
          playing video games, although I haven't had as much time for them since
          starting college. I'm also interested in technology and artificial
          intelligence, and I'm excited to learn more about how they can be used
          in different ways. Outside of school, I enjoy the scenery around
          Boulder, especially the mountains. I'm looking forward to exploring
          new interests and seeing what my time at CU has in store for me!
        </p>

        <a className="button" href="/">
          <p>Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .button {
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
