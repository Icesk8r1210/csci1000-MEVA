
export default function AbiSoriano() {
  return (
    <div className="container">
      <h1>Hey, I'm Abi!</h1>

      <p>
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
        Back to Home
      </a>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 2.5rem;
        }

        p {
          max-width: 600px;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .button {
          margin-top: 1rem;
          padding: 0.7rem 1.2rem;
          background: #333;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
