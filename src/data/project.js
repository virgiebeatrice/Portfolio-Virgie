import Project1 from "../../public/image/projects/moolen.png"
import Project2 from "../../public/image/projects/THIS.jpg"
import Project3 from "../../public/image/projects/VItality.jpg"
import Project4 from "../../public/image/projects/etl.png"

export const projects = [
    {
        id: 1,
        title: "Moolen",
        role: "Machine Learning Engineer",
        image: Project1,
        description: "MooLen is a mood tracker with journaling, mental health check-ins, and personalized tips.",
        tech: ["Python", "Tensorflow", "Keras", "Streamlit"],
        link: "https://github.com/virgiebeatrice/Moolen"
    },
    {
        id: 2,
        title: "THIS Mobile App",
        role: "Backend Developer",
        image: Project2,
        description: "THIS is a mobile journaling app with facial expression detection, mood insights, and secure sync.",
        tech: ["Kotlin", "Firebase"],
        link: "https://github.com/virgiebeatrice/ThisApps"
    },
    {
        id: 3,
        title: "Vitality",
        role: "Backend Developer",
        image: Project3,
        description: "Vitality is a website that provides disease information, medicine purchases, and a map-based feature to find nearby hospitals.",
        tech: ["PHP", "Laravel", "Javascript", "MySQL"],
        link: "https://github.com/virgiebeatrice/vitality"
    },
    {
        id: 4,
        title: "Bank Fraud Detection",
        role: "Machine Learning Engineer",
        image: "https://latinia.com/wp-content/uploads/acabar-con-el-fraude-bancario-1.jpg",
        description: "Machine learning project using clustering and classification to identify fraudulent transactions.",
        tech: ["Python", "Scikit-learn", "Pandas"],
        link: "#"
    },
    {
        id: 5,
        title: "Sports Image Classification",
        role: "Machine Learning Engineer",
        image: "https://tse4.mm.bing.net/th/id/OIP.5j3kazj7Uh5wON2TBclb-AHaEg?r=0&pid=Api",
        description: "Machine learning project that classifies images by sport type.",
        tech: ["Python", "Tensorflow", "Keras"],
        link: "#"
    },
    {
        id: 6,
        title: "Snow White Trailer Sentiment Analysis",
        role: "Machine Learning Engineer",
        image: "https://tse2.mm.bing.net/th/id/OIP.MnDUOSxODB6nasWhteLGQgHaEK?r=0&pid=Api",
        description: "Machine learning project analyzing youtube audience reactions to the film trailer using sentiment analysis.",
        tech: ["Python", "Scikit-learn", "Google API", "Tensorflow"],
        link: "#"
    },
    {
        id: 7,
        title: "E-commerce ETL Pipeline",
        role: "Machine Learning Engineer",
        image: Project4,
        description: "Machine learning project that scrapes product data from websites, transforms, and loads it into a database for analysis.",
        tech: ["Python", "BeautifulSoup", "SQLAlchemy"],
        link: "#"
    },
    {
        id: 8,
        title: "Book Recommendation System",
        role: "Machine Learning Engineer",
        image: "https://tse2.mm.bing.net/th/id/OIP.1k4x4eZE_gJdQb9LgvzQeAHaFj?pid=Api",
        description: "Machine learning project using content-based filtering to suggest books based on user preferences.",
        tech: ["Python", "Pandas", "Scikit-learn"],
        link: "#"
    },
  ];