import React from "react";

const JobDescription = () => {
  const data = [
    { title: "Salary", value: "$ 6969" },
    { title: "Job Location", value: "Bangalore" },
    { title: "Job Level", value: "SDE 1" },
    { title: "Education", value: "B Tech / M Tech" },
  ];
  return (
    <div className="w-11/12 md:w-4/6 mx-auto my-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center flex-row">
          <div className="p-2 rounded-full">
            <img
              src={"https://cdn-icons-png.flaticon.com/128/4128/4128176.png"}
              className="h-16"
            />
          </div>
          <div>
            <p className="text-gray-500 text-xl">Senior Software Engineer</p>
            <p className="text-gray-500 text-lg">Goodle India, Bengalore</p>
          </div>
        </div>
        <div className="flex items-center flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>

          <button class="ml-3 flex items-center px-6 py-2 font-normal tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#C31162] rounded-lg hover:bg-red-800 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            <span class="mx-1">Apply</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-stretch md:justify-between">
        <div className="w-1/2 flex-col justify-start items-start gap-4 inline-flex">
          <div className=" text-zinc-900 text-lg font-medium font-['Inter'] leading-7">
            Job Description
          </div>
          <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
            Velstar is a Shopify Plus agency, and we partner with brands to help
            them grow, we also do the same with our people!
          </div>
          <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
            Here at Velstar, we don't just make websites, we create exceptional
            digital experiences that consumers love. Our team of designers,
            developers, strategists, and creators work together to push brands
            to the next level. From Platform Migration, User Experience & User
            Interface Design, to Digital Marketing, we have a proven track
            record in delivering outstanding eCommerce solutions and driving
            sales for our clients.
          </div>
          <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
            The role will involve translating project specifications into clean,
            test-driven, easily maintainable code. You will work with the
            Project and Development teams as well as with the Technical
            Director, adhering closely to project plans and delivering work that
            meets functional & non-functional requirements. You will have the
            opportunity to create new, innovative, secure and scalable features
            for our clients on the Shopify platform
          </div>
          <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
            Want to work with us? You're in good company!
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className=" text-zinc-900 text-base font-medium font-['Inter'] leading-normal">
              Requirements
            </div>
            <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
              <br />
              3+ years of experience in back-end development working either with
              multiple smaller projects simultaneously or large-scale
              applications
              <br />
              Experience with HTML, JavaScript, CSS, PHP, Symphony and/or
              Laravel
              <br />
              Working regularly with APIs and Web Services (REST, GrapthQL,
              SOAP, etc)
              <br />
              Have experience/awareness in Agile application development,
              commercial off-the-shelf software, middleware, servers and
              storage, and database management.
              <br />
              Familiarity with version control and project management systems
              (e.g., Github, Jira)
              <br />
              Great troubleshooting and analytical skills combined with the
              desire to tackle challenges head-on
              <br />
              Ambitious and hungry to grow your career in a fast-growing agency
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className=" text-zinc-900 text-base font-medium font-['Inter'] leading-normal">
              Desirable:
            </div>
            <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
              Working knowledge of eCommerce platforms, ideally Shopify but also
              others e.g. Magento, WooCommerce, Visualsoft to enable seamless
              migrations.
              <br />
              Working knowledge of payment gateways
              <br />
              API platform experience / Building restful APIs
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className=" text-zinc-900 text-base font-medium font-['Inter'] leading-normal">
              Benefits
            </div>
            <div className=" text-gray-500 text-base font-normal font-['Inter'] leading-normal">
              Early finish on Fridays for our end of week catch up (4:30 finish,
              and drink of your choice from the bar)
              <br />
              28 days holiday (including bank holidays) rising by 1 day per year
              PLUS an additional day off on your birthday
              <br />
              Generous annual bonus.
              <br />
              Healthcare package
              <br />
              Paid community days to volunteer for a charity of your choice
              <br />
              £100 contribution for your own personal learning and development
              <br />
              Free Breakfast on Mondays and free snacks in the office
              <br />
              Access to Perkbox with numerous discounts plus free points from
              the company to spend as you wish.
              <br />
              Cycle 2 Work Scheme
              <br />
              Brand new MacBook Pro
              <br />
              Joining an agency on the cusp of exponential growth and being part
              of this exciting story.
            </div>
          </div>
        </div>
        <div className="w-2/5 inline">
          {data.map((item, index) => (
            <div
              key={index}
              class="mb-5 p-5 h-24 transition-shadow border rounded-lg shadow-sm hover:shadow-lg"
            >
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-2">
                  <span class="text-gray-400">{item.title}</span>
                  <span class="text-lg font-semibold">{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
