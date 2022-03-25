import hassan from '../Assets/hassan.jpg'
import { faDesktop,faMobile,faGlobe,faCubes } from '@fortawesome/free-solid-svg-icons'
const CategoriesItems = [
    {
      id: 0,
      title: "Mobile Apps",
      description:
        "Stand out with your business and personal projects with a mobile app that you can share with clients.",
      icon: faMobile,
    },
    {
      id: 1,
      title: "Websites",
      description:
        "What you need is a website that represents what you do! We'll build you one that looks excellent on any device.",
      icon: faGlobe   },
    {
      id: 2,
      title: "Desktop Applications",
      description:
        "Sometimes your business demands that you grow with it. A desktop app allows you increased monitoring and access controls over operations. ",
      icon: faDesktop    },
    {
      id: 3,
      title: "Web applications",
      description:
        "Web apps offer something different. We'll make all your company or personal operations accessible from anywhere in the world, on any device! ",
      icon: faCubes
    },
  ];

  export default CategoriesItems;