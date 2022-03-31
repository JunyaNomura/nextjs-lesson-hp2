import Layout from "../components/Layout";
import Image from 'next/image';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/asuka.jpg"
            width={60}
            height={60}
            alt="Asuka" 
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Location</p>
          <p className="text-xs mt-2 text-gray-600">Minato, Tokyo</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">asuka.photographer@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
        <div className="mt-6 flex justify-around">
          <FontAwesomeIcon icon={faTwitter} />
          <a href="https://yahoo.co.jp" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
  
export default Contact;