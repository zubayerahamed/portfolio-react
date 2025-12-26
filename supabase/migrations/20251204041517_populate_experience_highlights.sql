/*
  # Update Experience Records with Highlights

  Populate the experience table with highlights data organized as bullet points.
  
  1. Data Updates
    - Senior Fullstack Engineer: 5 highlights
    - Fullstack Software Engineer: 5 highlights
    - Junior Java Developer: 5 highlights
*/

UPDATE experience
SET highlights = ARRAY[
  'Leading development of enterprise applications using Java and Spring Boot',
  'Architecting microservices-based systems with Spring Cloud and Eureka',
  'Mentoring junior developers and conducting code reviews',
  'Implemented CI/CD pipelines using Jenkins and improved deployment efficiency by 40%',
  'Designed and optimized PostgreSQL database schemas for better performance'
]
WHERE company = 'Tech Solutions Ltd.' AND position = 'Senior Fullstack Engineer';

UPDATE experience
SET highlights = ARRAY[
  'Developed and maintained multiple web applications using Spring MVC framework',
  'Collaborated with cross-functional teams to deliver high-quality software solutions',
  'Optimized database queries resulting in 50% performance improvement',
  'Implemented REST APIs with comprehensive documentation using Swagger',
  'Contributed to system integration and third-party API integrations'
]
WHERE company = 'Digital Innovations Inc.' AND position = 'Fullstack Software Engineer';

UPDATE experience
SET highlights = ARRAY[
  'Started career working on legacy system modernization and refactoring',
  'Learned Spring framework fundamentals and enterprise development best practices',
  'Contributed to bug fixes and new feature implementations',
  'Participated in code reviews and learned from senior developers',
  'Developed JSP-based web applications and worked with Oracle Database'
]
WHERE company = 'Software Systems Corp.' AND position = 'Junior Java Developer';
