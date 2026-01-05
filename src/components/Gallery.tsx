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
    title: 'Meetup Event',
    description: 'Met with our CEO and Clients to discuss project updates and future plans',
    image_url: '/events/1.jpg',
    event_date: '2024-05-15',
    category: 'Meetup',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'Day Outing Event',
    description: 'A memorable day outing with team members to enhance bonding and collaboration',
    image_url: '/events/2.jpg',
    event_date: '2023-09-20',
    category: 'Day Outing',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'Buffet Event',
    description: 'A delightful buffet event with a variety of cuisines to celebrate team achievements',
    image_url: '/events/3.jpg',
    event_date: '2023-07-10',
    category: 'Achievement',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'Workshop on Clean Code',
    description: 'Participated in an intensive workshop focused on writing clean and maintainable code',
    image_url: '/events/4.jpeg',
    event_date: '2023-05-25',
    category: 'Workshop',
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Product Launch',
    description: 'Launching a new product that revolutionizes user experience in web applications',
    image_url: '/events/5.jpg',
    event_date: '2023-03-12',
    category: 'Achievement',
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'Certification Achievement',
    description: 'Achieved Oracle Certified Professional, Java SE 6 Programmer certification',
    image_url: '/events/6.jpg',
    event_date: '2023-02-08',
    category: 'Achievement',
    order_index: 6,
    created_at: '',
  },
  {
    id: '7',
    title: 'Iftar Party',
    description: 'Celebrating the spirit of Ramadan with an Iftar party among colleagues and friends',
    image_url: '/events/7.jpeg',
    event_date: '2022-12-15',
    category: 'Meetup',
    order_index: 7,
    created_at: '',
  },
  {
    id: '8',
    title: 'Training Session',
    description: 'Conduct a hands-on training session on the Power Distribution Board Prepaid Metering System.',
    image_url: '/events/8.jpeg',
    event_date: '2022-10-22',
    category: 'Workshop',
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
                {item.title != '' && (
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                )}
                {item.event_date != '' && (
                  <p className="text-white/90 text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.event_date)}
                  </p>
                )}
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
                className="w-full h-full object-cover"
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
