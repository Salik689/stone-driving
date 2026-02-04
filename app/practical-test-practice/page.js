import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <main className="mx-auto max-w-4xl px-5 py-12 space-y-10">
        {/* Title */}
        <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-center">
          What happens during the Practical Test
        </h1>

        {/* Intro section */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">
            There are 4 parts to the driving test:
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>an eyesight check</li>
            <li>‘show me, tell me’ vehicle safety questions</li>
            <li>general driving ability (including independent driving)</li>
            <li>reversing your vehicle</li>
          </ul>
        </section>

        {/* Duration */}
        <section className="space-y-3">
          <h2 className="font-bold text-2xl">How long the test lasts</h2>
          <p>You’ll drive for around 35 minutes.</p>
          <p>
            You’ll drive for around 65 minutes if you’re taking an{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-800"
              href="https://www.gov.uk/driving-disqualifications/disqualification-until-test-pass-or-extended-test-pass"
            >
              extended driving test
            </Link>{" "}
            because you’ve been banned from driving.
          </p>
        </section>

        {/* Eyesight */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">Eyesight check</h2>
          <p>You’ll have to read a number plate from a distance of:</p>

          <ul className="list-disc list-inside space-y-2">
            <li>20 metres for vehicles with a new-style number plate</li>
            <li>20.5 metres for vehicles with an old-style number plate</li>
          </ul>

          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm">
            New-style number plates start with 2 letters followed by 2 numbers,
            such as AB51 ABC.
          </div>
        </section>
      </main>

      {/* Extra info */}
      <section className="mx-auto max-w-4xl px-5 pb-16 space-y-10">
        {/* Show me tell me */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl"><Link className="text-blue-600 underline hover:text-blue-800" href="/show-me-tell-me">‘Show me, tell me’</Link> questions</h2>
          <p>You’ll be asked the:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>‘tell me’ question at the start of your test, before you start driving</li>
            <li>‘show me’ question while you’re driving</li>
          </ul>
        </section>

        {/* Driving ability */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">
            Your general driving ability (including independent driving)
          </h2>

          <p>You’ll drive in various road and traffic conditions, but not on motorways.</p>
          <p>You’ll drive independently for 20 to 35 minutes. You’ll need to follow either:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>directions from a sat nav</li>
            <li>traffic signs</li>
            <li>a combination of both</li>
          </ul>

          <p>The examiner will tell you which you have to follow.</p>
          <p>They’ll set the sat nav up for you. You cannot use your own sat nav.</p>
        </section>

        {/* Sub sections */}
        <section className="space-y-3">
          <h3 className="font-semibold text-lg">If you cannot see traffic signs</h3>
          <p>
            If you cannot see a traffic sign (for example, because it’s covered by trees),
            the examiner will give you directions until you can see the next one.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-semibold text-lg">Going off the route</h3>
          <p>
            The examiner{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-800"
              href="https://www.gov.uk/driving-test/driving-test-faults-result"
            >
              will not give you a fault
            </Link>{" "}
            for taking a wrong turning.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-semibold text-lg">
            If you’re not following a sat nav or traffic signs
          </h3>
          <p>
            The examiner will give you turn-by-turn directions to follow at any time
            when you’re not following directions from a sat nav or traffic signs.
          </p>
          <p>
            Driving test routes are not published, so you cannot check them before your test.
          </p>
        </section>

        {/* Pull over */}
        <section className="space-y-4">
          <h3 className="font-semibold text-lg">Pulling over at the side of the road</h3>
          <p>You’ll be asked to pull over and pull away during your test, including:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>a normal stop at the side of the road</li>
            <li>pulling out from behind a parked vehicle</li>
            <li>a hill start</li>
          </ul>

          <div className="rounded-lg border-l-4 border-gray-400 bg-gray-50 p-4 text-sm">
            You might also be asked to carry out an emergency stop.
          </div>
        </section>

        {/* Reversing */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">Reversing your vehicle</h2>
          <p>The examiner will ask you to do one of the following exercises:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>parallel park at the side of the road</li>
            <li>
              park in a parking bay – either by driving in and reversing out, or
              reversing in and driving out
            </li>
            <li>
              pull up on the right-hand side of the road, reverse for around 2 car
              lengths, and rejoin the traffic
            </li>
          </ul>
        </section>

        {/* Mistakes */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">If you make mistakes during your test</h2>
          <p>
            You can carry on if you make a mistake. It might not affect{" "}
            <Link
              className="text-blue-600 underline hover:text-blue-800"
              href="https://www.gov.uk/driving-test/driving-test-faults-result"
            >
              your test result
            </Link>{" "}
            if it’s not serious.
          </p>
          <p>
            Your driving examiner will only stop your test if they think your driving
            is a danger to other road users.
          </p>
        </section>

        {/* Other people */}
        <section className="space-y-4">
          <h2 className="font-bold text-2xl">Other people at your test</h2>
          <p>
            Your driving examiner’s supervisor might sit in on your test to watch
            your examiner’s performance.
          </p>
          <p>Your driving examiner will ask if you want someone to:</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>sit in the back of the car during the test</li>
            <li>be with you for the result and feedback</li>
          </ul>

          <p>This will usually be your driving instructor, but you can take a relative or friend.</p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>be over 16</li>
            <li>
              <Link
                className="text-blue-600 underline hover:text-blue-800"
                href="https://www.gov.uk/guidance/rules-for-observing-driving-tests"
              >
                follow the rules about observing tests
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};

export default page;
