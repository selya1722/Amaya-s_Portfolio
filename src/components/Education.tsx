const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information and Communication Technology",
      school: "University of Sri Jayewardenepura - Faculty of Technology",
      duration: "2023 - 2027",
      achievements: ["ICT Society Logo Designer", "ICT Society, CryptX event Secretary", "J'pura Vikings Club Conntent Creation Head"],
      icon: "🎓"
    },
    {
      degree: "GCE A/L",
      school: "Devi Balika Vidyalaya, Colombo 08",
      duration: "2019 - 2021",
      achievements: ["Passed GCE A/L with 2As & B"],
      icon: "💻"
    },
    {
      degree: "GCE O/L",
      school: "Central College Homagama",
      duration: "2013 - 2018",
      achievements: ["Passed GCE O/L with 8As and C (English Literature)"],
      icon: "🏫"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements that shaped my technical foundation
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group glass-effect rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {edu.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      {edu.degree && (
                        <h3 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                          {edu.degree}
                        </h3>
                      )}
                      <p className="text-purple-300 text-lg">
                        {edu.school}
                      </p>
                    </div>
                    <div className="text-right mt-2 lg:mt-0">
                      <p className="text-muted-foreground text-sm">
                        {edu.duration}
                      </p>
                      {edu.gpa && (
                        <p className="text-purple-400 font-semibold">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {edu.achievements && Array.isArray(edu.achievements) && (
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-purple-300">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-center">
                            <span className="w-2 h-2 gradient-primary rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
