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
          <section className="bg-slate-50">
            <div className="container mx-auto">
              <div className="lg:w-2/3 mx-auto">
                <h1 className="mb-10">Contact Us</h1>

                <h3>Need an answer from NFT Diaries?</h3>
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
                <div className=" grid md:grid-cols-2">
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
                        Let us know your Whatsapp/Telegram Id.
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Whatsapp/Telegram..."
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <button className="btn btn-primary mt-10">Send Message</button>
              </div>
            </div>
          </section>
        </>
      </main>
    </AppWrapper>
  );
}
