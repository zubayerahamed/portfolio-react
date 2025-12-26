/*
  # Insert Portfolio Content Data

  This migration populates all portfolio sections with sample data.
  Includes services, skills, projects, experience, certifications, and gallery items.
*/

DELETE FROM services;
DELETE FROM skills;
DELETE FROM projects;
DELETE FROM experience;
DELETE FROM certifications;
DELETE FROM gallery;

INSERT INTO services (title, description, icon, order_index) VALUES
('Backend Development', 'Building robust and scalable backend systems using Java, Spring Boot, and microservices architecture.', 'Code2', 1),
('API Development', 'Designing and implementing RESTful APIs and integrating third-party services with best practices.', 'Zap', 2),
('Database Design', 'Architecting efficient database schemas and optimizing queries for PostgreSQL, MySQL, and MongoDB.', 'Database', 3),
('Cloud Deployment', 'Deploying applications on cloud platforms like AWS, Azure, and managing containerized applications.', 'Cloud', 4),
('System Integration', 'Integrating complex systems and ensuring seamless communication between different platforms.', 'Wrench', 5),
('Technical Consulting', 'Providing expert guidance on architecture decisions, technology stack selection, and best practices.', 'Users', 6);

INSERT INTO skills (name, category, proficiency, order_index) VALUES
('Java', 'Backend', 95, 1),
('Spring Boot', 'Backend', 95, 2),
('Spring MVC', 'Backend', 90, 3),
('Hibernate/JPA', 'Backend', 90, 4),
('Microservices', 'Backend', 85, 5),
('REST API', 'Backend', 95, 6),
('PostgreSQL', 'Database', 90, 7),
('MySQL', 'Database', 90, 8),
('MongoDB', 'Database', 80, 9),
('Redis', 'Database', 75, 10),
('JavaScript', 'Frontend', 85, 11),
('TypeScript', 'Frontend', 80, 12),
('React', 'Frontend', 85, 13),
('HTML/CSS', 'Frontend', 90, 14),
('Git', 'Tools', 90, 15),
('Docker', 'Tools', 85, 16),
('Kubernetes', 'Tools', 75, 17),
('Maven/Gradle', 'Tools', 90, 18),
('AWS', 'Cloud', 80, 19),
('Jenkins', 'Tools', 80, 20);

INSERT INTO projects (title, description, image_url, github_url, live_url, technologies, status, featured, order_index) VALUES
('Enterprise ERP System', 'Full-featured ERP system built with Spring Boot, handling inventory, sales, and financial management for medium to large enterprises.', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/erp-system', 'https://erp-demo.example.com', ARRAY['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker'], 'present', true, 1),
('Microservices Architecture', 'Scalable microservices-based application with service discovery, API gateway, and distributed tracing using Spring Cloud.', 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/microservices-demo', '', ARRAY['Spring Cloud', 'Eureka', 'Zuul', 'Docker', 'Kubernetes'], 'present', true, 2),
('REST API Framework', 'Custom REST API framework with authentication, authorization, rate limiting, and comprehensive API documentation.', 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/rest-framework', 'https://api-docs.example.com', ARRAY['Java', 'Spring Security', 'JWT', 'Swagger', 'Redis'], 'past', true, 3),
('E-commerce Platform', 'Modern e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.', 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/ecommerce', '', ARRAY['Spring Boot', 'MySQL', 'Stripe API', 'React', 'TypeScript'], 'upcoming', false, 4),
('Data Analytics Pipeline', 'Big data processing pipeline for real-time analytics using Apache Kafka and Spring Batch for ETL operations.', 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/analytics-pipeline', '', ARRAY['Spring Batch', 'Kafka', 'MongoDB', 'Elasticsearch', 'Grafana'], 'past', false, 5),
('IoT Device Management', 'Platform for managing IoT devices with real-time monitoring, data collection, and device configuration capabilities.', 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://github.com/zubayerahamed/iot-platform', '', ARRAY['Spring Boot', 'MQTT', 'InfluxDB', 'WebSocket', 'Vue.js'], 'upcoming', false, 6);

INSERT INTO experience (company, position, description, start_date, end_date, current, location, technologies, order_index) VALUES
('Tech Solutions Ltd.', 'Senior Fullstack Engineer', 'Leading development of enterprise applications using Java and Spring Boot. Architecting microservices-based systems and mentoring junior developers. Implemented CI/CD pipelines and improved deployment efficiency by 40%.', '2021-01-01', NULL, true, 'Dhaka, Bangladesh', ARRAY['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker', 'Kubernetes'], 1),
('Digital Innovations Inc.', 'Fullstack Software Engineer', 'Developed and maintained multiple web applications using Spring framework. Collaborated with cross-functional teams to deliver high-quality software solutions. Optimized database queries resulting in 50% performance improvement.', '2018-06-01', '2020-12-31', false, 'Dhaka, Bangladesh', ARRAY['Java', 'Spring MVC', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap'], 2),
('Software Systems Corp.', 'Junior Java Developer', 'Started career as a junior developer working on legacy system modernization. Learned Spring framework and best practices in software development. Contributed to bug fixes and feature implementations.', '2016-03-01', '2018-05-31', false, 'Dhaka, Bangladesh', ARRAY['Java', 'Spring', 'Oracle DB', 'JSP', 'Servlets'], 3);

INSERT INTO certifications (title, issuer, issue_date, expiry_date, credential_id, credential_url, image_url, order_index) VALUES
('Oracle Certified Professional, Java SE Developer', 'Oracle', '2020-06-15', NULL, 'OCP-12345', 'https://catalog.oracle.com/verify', 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=400', 1),
('Spring Professional Certification', 'VMware/Pivotal', '2021-03-20', NULL, 'SPRING-67890', 'https://spring.io/certifications', 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400', 2),
('AWS Certified Solutions Architect', 'Amazon Web Services', '2022-01-10', '2025-01-10', 'AWS-SAA-54321', 'https://aws.amazon.com/certification', 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400', 3),
('MongoDB Certified Developer', 'MongoDB Inc.', '2021-09-05', NULL, 'MONGO-98765', 'https://university.mongodb.com/certification', 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=400', 4),
('Certified Kubernetes Administrator', 'Cloud Native Computing Foundation', '2022-08-15', '2025-08-15', 'CKA-13579', 'https://www.cncf.io/certification/cka/', 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400', 5),
('Professional Scrum Master I', 'Scrum.org', '2019-11-20', NULL, 'PSM-24680', 'https://www.scrum.org/certificates', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400', 6);

INSERT INTO gallery (title, description, image_url, event_date, category, order_index) VALUES
('Tech Conference 2023', 'Speaking at the annual Java developers conference about microservices architecture', 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-11-15', 'Conference', 1),
('Team Building Event', 'Annual team building activities with the development team', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-09-20', 'Team Event', 2),
('Hackathon Winner', 'Won first place at the Spring Boot hackathon with an innovative solution', 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-07-10', 'Achievement', 3),
('Workshop on Clean Code', 'Conducting workshop on clean code principles and best practices', 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-05-25', 'Workshop', 4),
('Product Launch', 'Successful launch of enterprise ERP system to major client', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-03-12', 'Milestone', 5),
('Meetup: Spring Framework', 'Organizing and speaking at local Spring Framework meetup', 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800', '2023-02-08', 'Meetup', 6),
('Certification Achievement', 'Receiving AWS Solutions Architect certification', 'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=800', '2022-12-15', 'Achievement', 7),
('Open Source Contribution', 'Contributing to Spring Boot open source project', 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800', '2022-10-22', 'Open Source', 8);
