import Head from "next/head";
import { AppWrapper } from "@/layout/AppWrapper";

export default function Contact() {
  return (
    <AppWrapper>
      <Head>
        <title>Contact</title>
        <meta name="description" content="CryptoPhd" />
      </Head>

      <main>
        <>
          {" "}
          <div className="title">
            <div className="title-image">
              <img src="https://picsum.photos/seed/picsum/1600/600" alt="" />
            </div>
            <div className="title-content">
              <div className="container mx-auto z-10 relative">
                <h1 className="mb-0 text-white">Contact</h1>
                <div className="text-sm breadcrumbs text-white">
                  <ul>
                    <li>
                      <a>Home</a>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="container mx-auto">
              <div className="lg:w-2/3 mx-auto">
                <h2>Need an answer from Brooklyn College?</h2>
                <p>
                  We would love to help you. Fill free to leave a message; we
                  will message you back right away.{" "}
                </p>

                <div className="form-control mt-20 w-10/12">
                  <label className="label">
                    <span className="label-text font-semibold text-gray-800 text-lg">
                      What are you looking for?
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-36"
                    placeholder="How can we help?
					"
                  ></textarea>
                </div>
                <div className="mt-20">
                  <h3 className="mb-0">Personal Details</h3>
                  <p className="text-gray-400">
                    Your details are safe with us.
                  </p>
                </div>
                <div className=" grid grid-cols-2">
                  <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                      <span className="label-text text-gray-500">
                        What is your Fullname?
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Fullname..."
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                      <span className="label-text text-gray-500">
                        What is your Email?
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email..."
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control w-full max-w-xs mt-4">
                    <label className="label">
                      <span className="label-text text-gray-500">
                        What is your Phone Number?
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number..."
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <button className="btn btn-outline mt-10">Send Message</button>
              </div>
            </div>
          </section>
        </>
      </main>
    </AppWrapper>
  );
}
