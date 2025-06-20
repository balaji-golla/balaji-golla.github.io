
import { Certificate } from '../types';
import { CheckCircleIcon } from '../components/Icons';


export const certificatesData: Certificate[] = [
  {
    id: 'cert1',
    title: 'React Nanodegree',
    issuingOrganization: 'Udacity',
    date: '2023',
    credentialId: 'XYZ123ABC',
    credentialUrl: './assets/documents/react-nanodegree.pdf', // User needs to create
    imageUrl: './assets/images/cert-udacity-react.png', // User needs to create
    icon: <CheckCircleIcon className="w-10 h-10 text-green-500" />
  },
  {
    id: 'cert2',
    title: 'Certified JavaScript Developer',
    issuingOrganization: 'W3Schools',
    date: '2022',
    credentialUrl: './assets/documents/js-developer-cert.pdf', // User needs to create
    imageUrl: './assets/images/cert-w3-js.png', // User needs to create
    icon: <CheckCircleIcon className="w-10 h-10 text-green-500" />
  },
];
