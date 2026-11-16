export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Vidyaa. </h1>
          </div>
          <img
            className='pic'
            src='https://media.licdn.com/dms/image/v2/D4E03AQFr2qBWTZMIBQ/profile-displayphoto-scale_200_200/B4EZzAlwmSIUAg-/0/1772757656098?e=1796256000&v=beta&t=ZOW7yBjWsANbur3HbhUE-EgszVyY3ZUZMsdpOrzMZC8'
            alt='tom holland'
          />

          <p className='description'>
            Hey! I'm your friendly neighborhood problem-solver. My name is Vidyaa Vaish, 
            and I'm a Computer Science student at CU Boulder. I'm passionate about technology, 
            robotics, and finding creative ways to solve real-world problems. Whether I'm 
            building drones, experimenting with sensors, coding new projects, or leading initiatives 
            in my community, I love turning big ideas into something meaningful. I'm also a leader,
            a curious learner, and someone who isn't afraid to get their hands dirty when things don't
            go as planned. I may not have superhuman strength or the ability to shoot webs, but I've
            got a knack for problem-solving, a drive to make an impact, and probably a few too many
            projects going on at once!
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
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
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
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

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}