import React from "react";

const page = () => {
  return (
    <>
      <main className="mx-auto max-w-4xl px-5 py-12 space-y-12">
        <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-center text-orange-600">
          Show me, tell me questions
        </h1>

        <section className="bg-gray-50 rounded-xl p-6 shadow-md border border-gray-200 space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">About the questions</h2>
          <p className="text-gray-700">You’ll be asked 2 vehicle safety questions during your car driving test.</p>
          <p className="text-gray-700">The examiner will ask you one:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>
              ‘tell me’ question (where you explain how you’d carry out a safety task) at the start
              of your test, before you start driving
            </li>
            <li>
              ‘show me’ question (where you show how you’d carry out a safety task) while you’re driving
            </li>
          </ul>
          <p className="text-gray-700">
            You’ll get one driving fault (sometimes called a ‘minor’) if you get one or both questions wrong
          </p>
          <div className="rounded-lg border-l-4 border-gray-400 bg-gray-100 p-4 text-sm text-gray-800 font-medium">
            You’ll fail your driving test if your driving is dangerous or potentially dangerous while you answer the
            ‘show me’ question.
          </div>
        </section>

        <section className="tell-me-questions space-y-4">
          <h2 className="text-orange-600 text-2xl font-bold border-b border-gray-300 pb-2 mb-4">‘Tell me’ questions</h2>

          {[
            {
              q: "1. How would you check that the brakes are working before starting a journey?",
              a: "Before starting the journey, I would check that the brake pedal does not feel spongy or slack. As I set off, I would test the brakes gently to make sure the vehicle slows down properly and does not pull to one side."
            },
            {
              q: "2. Where would you find the recommended tyre pressures for this car and how should tyre pressures be checked?",
              a: "The recommended tyre pressures can be found in the manufacturer’s handbook or on a label inside the car, such as the driver’s door frame or fuel flap. Tyre pressures should be checked using a reliable pressure gauge when the tyres are cold. Pressures should be adjusted if needed, including the spare tyre if fitted, and valve caps should be refitted."
            },
            {
              q: "3. How would you make sure your head restraint is correctly adjusted?",
              a: "The head restraint should be adjusted so that the rigid part is at least as high as the eyes or the top of the ears and as close to the back of the head as is comfortable. Some head restraints may not be adjustable."
            },
            {
              q: "4. How would you check the tyres have sufficient tread depth and are safe to use?",
              a: "I would check that the tyres have no cuts or bulges and that the tread depth is at least 1.6mm across the central three-quarters of the tyre and around the entire circumference."
            },
            {
              q: "5. How would you check that the headlights and tail lights are working?",
              a: "I would turn on the light switch, turning on the ignition if necessary, and explain that I would then walk around the vehicle to check the lights. As this is a “tell me” question, I do not need to physically leave the vehicle."
            },
            {
              q: "6. How would you know if there was a problem with the anti-lock braking system (ABS)?",
              a: "A warning light on the dashboard would illuminate if there was a fault with the anti-lock braking system."
            },
            {
              q: "7. How would you check the direction indicators are working?",
              a: "I would operate the indicator switch, turning on the ignition if necessary, and explain that I would then walk around the vehicle to check the indicators."
            },
            {
              q: "8. How would you check the brake lights are working?",
              a: "I would operate the brake pedal and either check the lights using reflections in windows or doors, or ask someone to help me confirm that the brake lights are working."
            },
            {
              q: "9. How would you check the power-assisted steering is working?",
              a: "If the steering becomes heavy, this may indicate a fault. One check is to apply gentle pressure to the steering wheel while starting the engine. The wheel should move slightly as the system starts working. Alternatively, turning the steering wheel just after moving off should confirm that the power-assisted steering is functioning."
            },
            {
              q: "10. How would you switch on the rear fog light and when would you use it?",
              a: "I would operate the rear fog light switch, turning on the dipped headlights and ignition if necessary, and check that the warning light is illuminated. Rear fog lights should be used when visibility is seriously reduced, generally when you cannot see more than 100 metres."
            },
            {
              q: "11. How would you switch from dipped headlights to main beam?",
              a: "I would operate the headlight control or stalk with the ignition or engine on if necessary and check that the main beam warning light is illuminated on the dashboard."
            },
            {
              q: "12. How would you check that the engine has sufficient oil?",
              a: "I would identify the dipstick or oil level indicator, remove it, wipe it clean, reinsert it, and then check that the oil level is between the minimum and maximum markings."
            },
            {
              q: "13. How would you check that the engine has sufficient coolant?",
              a: "I would identify the coolant reservoir or header tank and check that the coolant level is between the minimum and maximum markings. If necessary, coolant should be topped up to the correct level when the engine is cold."
            },
            {
              q: "14. How would you check that you have a safe level of hydraulic brake fluid?",
              a: "I would identify the brake fluid reservoir and check that the fluid level is between the minimum and maximum markings."
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-gray-800 hover:text-orange-600">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}

          <div className="mt-8">
            <iframe
              className="w-full aspect-video rounded-lg shadow-md border border-gray-200"
              src="https://www.youtube.com/embed/uh8slnP76-w"
              title="'Show me, tell me': tell me questions 2025: official DVSA guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section className="show-me-questions mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
  <h2 className="text-orange-600 text-2xl sm:text-3xl font-bold border-b border-gray-300 pb-2 sm:pb-3 mb-6">
    ‘Show me’ questions
  </h2>

  <ul className="space-y-4">
    {[
      "When it’s safe to do so, can you show me how you wash and clean the rear windscreen?",
      "When it’s safe to do so, can you show me how you wash and clean the front windscreen?",
      "When it’s safe to do so, can you show me how you’d switch on your dipped headlights?",
      "When it’s safe to do so, can you show me how you’d set the rear demister?",
      "When it’s safe to do so, can you show me how you’d operate the horn?",
      "When it’s safe to do so, can you show me how you’d demist the front windscreen?",
      "When it’s safe to do so, can you show me how you’d open and close the side window?"
    ].map((question, idx) => (
      <li
        key={idx}
        className="bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm text-gray-800 text-base sm:text-lg hover:shadow-md transition-shadow duration-200"
      >
        {question}
      </li>
    ))}
  </ul>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
  <div className="relative w-full aspect-video">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
      src="https://www.youtube.com/embed/damj01nXcZU"
      title="'Show me, tell me': show me questions 2025: official DVSA guide"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

</section>

      </main>
    </>
  );
};

export default page;
