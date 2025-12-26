/*
  # Insert sample project screenshots

  1. Sample Data
    - Add multiple screenshots for each project
    - Screenshots linked to existing projects via project_id
*/

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'Enterprise ERP System'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'Enterprise ERP System'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800', 3
FROM projects WHERE title = 'Enterprise ERP System'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'Microservices Architecture'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'Microservices Architecture'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'REST API Framework'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'REST API Framework'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'E-commerce Platform'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'E-commerce Platform'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'Data Analytics Pipeline'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3182807/pexels-photo-3182807.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'Data Analytics Pipeline'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800', 1
FROM projects WHERE title = 'IoT Device Management'
ON CONFLICT DO NOTHING;

INSERT INTO project_screenshots (project_id, image_url, order_index)
SELECT id, 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800', 2
FROM projects WHERE title = 'IoT Device Management'
ON CONFLICT DO NOTHING;