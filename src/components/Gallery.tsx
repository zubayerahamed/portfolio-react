import { useState } from 'react';
import { Calendar, X } from 'lucide-react';

type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  event_date: string;
  category: string;
  order_index: number;
  created_at: string;
};

const gallery: GalleryItem[] = [
  {
    id: '1',
    title: 'Tech Conference 2023',
    description: 'Speaking at the annual Java developers conference about microservices architecture',
    image_url: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-11-15',
    category: 'Conference',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'Team Building Event',
    description: 'Annual team building activities with the development team',
    image_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-09-20',
    category: 'Team Event',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'Hackathon Winner',
    description: 'Won first place at the Spring Boot hackathon with an innovative solution',
    image_url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-07-10',
    category: 'Achievement',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'Workshop on Clean Code',
    description: 'Conducting workshop on clean code principles and best practices',
    image_url: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-05-25',
    category: 'Workshop',
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Product Launch',
    description: 'Successful launch of enterprise ERP system to major client',
    image_url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-03-12',
    category: 'Milestone',
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'Meetup: Spring Framework',
    description: 'Organizing and speaking at local Spring Framework meetup',
    image_url: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2023-02-08',
    category: 'Meetup',
    order_index: 6,
    created_at: '',
  },
  {
    id: '7',
    title: 'Certification Achievement',
    description: 'Receiving AWS Solutions Architect certification',
    image_url: 'https://images.pexels.com/photos/5940831/pexels-photo-5940831.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2022-12-15',
    category: 'Achievement',
    order_index: 7,
    created_at: '',
  },
  {
    id: '8',
    title: 'Open Source Contribution',
    description: 'Contributing to Spring Boot open source project',
    image_url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
    event_date: '2022-10-22',
    category: 'Open Source',
    order_index: 8,
    created_at: '',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const categories = ['All', ...Array.from(new Set(gallery.map(item => item.category)))];
  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Event Gallery
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highlights from conferences, workshops, and professional events
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full w-fit mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/90 text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {formatDate(item.event_date)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found in this category.</p>
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.image_url}
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover"
              />
              <div className="p-6">
                <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4" />
                  {formatDate(selectedImage.event_date)}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
