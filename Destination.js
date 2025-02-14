
// Function to handle "View Details" button clicks
function viewDetails(destination) {
    let destinationDetails = {
        Lumbini: {
            name: "Lumbini",
            description: "Lumbini is one of the world most popular, holiest pilgrimage places. It is in the Rupendehi District. Lumbini is in the UNESCO World Heritage Sites now. We can explore the monasteries and try other Nepali food on the street. We can ride a bicycle along the edges of rural terrain. We can also attend meditation classes, the primary activities you can do in Lumbini.",
            moreInfo: "Lumbini is a birth place of light of asia Gautam buddha."
        },
        Sagarmatha: {
            name: "Sagarmatha Base Camp",
            description: "The Everest Base Camp Trek 9 Days is designed for trekkers who have short holidays but still would like to touch the world's highest Everest Base Camp (5,380m). It is one of the most rewarding and popular treks in the world, where you will experience the likely sceneries of Himalayan ranges, ancient Buddhist monasteries, and wildlife animals throughout your travel.",
            moreInfo: ""
        },
        Bhaktapur: {
            name: "Bhaktapur",
            description: "Bhaktapur is one of the best places to visit in the Kathmandu Valley.Bhaktapur is one of those places where you arrive and you can immediately feel its uniqueness. From the temples and traditional Newari architecture to scrolling through the streets to find hidden gems all around Bhaktapur.",
            moreInfo: "Bhaktapur is also called a “living museum” as the temples have become a part of every day life and by walking through the city, you can experience Nepal cultural heritage coming to life."
        }
    };

    // Display the destination details in an alert (or could redirect to a dedicated page for more information)
    let details = destinationDetails[destination];
    if (details) {
        alert(`${details.name}\n\nDescription: ${details.description}\n\nMore Info: ${details.moreInfo}`);
    }
}