Prompt

Please build a toy program to collect patient feedback after an appointment. Attached is some JSON with sample data about patients and their appointments which should drive the program. Below is a sample script outlining the questions to be presented to each patient.

We know we’ve given you a limited timeframe and we want this to be fun. You need to build something clean, functional, and delightful that meets the requirements noted below.

Sample Script

    Program prompts: “Hi [Patient First Name], on a scale of 1-10, would you recommend Dr [Doctor Last Name] to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend”. Record the patient's response (an integer between 1-10).

    Program prompts: “Thank you. You were diagnosed with [Diagnosis]. Did Dr [Doctor Last Name] explain how to manage this diagnosis in a way you could understand?”. Record the patient’s response, considering special treatment of Yes/No.

    Program prompts: “We appreciate the feedback. One last question: How do you feel about being diagnosed with [Diagnosis]?" Record the patient's response.

    Program concludes with: “Thanks again! Here’s what we heard:”. Take some creative license with how you choose to present the recorded responses.

Technical Requirements

    Create a front-end focused architecture diagram.

    If you know any of the languages/technologies in our tech stack, please use them

        If you have experience with React, please build out your UI using React. Otherwise, please feel free to use a technology of your choice.

        You must incorporate Typescript into your solution.

        Persist your data by writing recorded responses to JSON or saving it to local storage.

        We heavily rely on styled-components for our in-house component library and for styling across our applications. We highly encourage you to leverage styled-components in your solution implementation.

        Bonus: If you are familiar with cloud services (i.e. AWS), host the program in the cloud (otherwise running this locally is fine)

    Ensure thorough unit testing by implementing a robust testing strategy and leveraging a testing library (e.g. React Testing Library).

Functional Requirements

    Present the patient with a survey of the questions included in the attached JSON and persist their responses.

    Please ensure your application is well-designed and visually appealing.

    Ensure forms are validated.

    Ensure that the forms also include navigation elements allowing users to move forward and backward through the questionnaire.

    Bonus: Build your application so that the questions can be dynamically configured.

Additional Instructions

    Please be ready to showcase your code via an IDE and discuss your design choices. Push your code up to GitHub and please share your code with us by the end of the interview for future reference.

    Be ready to explain the reasoning behind your coding decisions. We value your thought process as much as the code itself, so please be prepared to explain the rationale behind your approach.

    Be prepared to explain how you worked through any technical problems you encountered.

    If you had to learn a new technology during development, please share your learning process.

    Please provide some thoughts on what you might have done differently or next steps for the project (if you were to keep working on this).

    Feel free to ask questions and reach out if you ever get stuck by just replying all to this email.