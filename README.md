# Local Time Clock

This repository provides a simple solution for displaying a local time clock on a webpage. The objective of this script is to show the local time, specifically for office hours, on a website even if the server is located in a different time zone. Additionally, it includes a cute blinker effect using CSS to enhance the clock's appearance.

## Background

By default, web servers often display the time based on their server's location. However, in situations where the website serves a global audience or requires accurate local time representation, it becomes necessary to adapt the displayed time to match the user's time zone.

## Solution

This project offers an easy-to-use JavaScript script that dynamically updates the displayed time on the webpage. The script is initially set for the "Europe/Berlin" time zone, but it can be easily adapted to any desired time zone by modifying the code.

The script includes the following features:

- **Time Zone Localization**: The script utilizes the `toLocaleString()` function in JavaScript to retrieve the current date and time based on the user's time zone.

- **Hour Format**: The displayed hours are formatted to a 12-hour clock, providing a familiar and easily readable representation.

- **Real-Time Update**: The script updates the displayed time every second, ensuring that users see the most up-to-date local time.

The cute blinker effect is achieved using CSS animation, making the clock more visually appealing.

## Usage

To use this script on your webpage:

1. Clone or download the repository to your local machine.

2. Incorporate the provided HTML, CSS, and JavaScript code into your existing webpage.

3. Customize the styling of the clock to match your website's design, including adjusting the font size, colors, and positioning as desired.

4. Modify the JavaScript code to set the desired time zone for accurate local time representation. Replace the "Europe/Berlin" time zone with your desired time zone. You can find the available time zone options in the [JavaScript Time Zones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#time_zones) documentation.

5. Upload the modified webpage, along with the necessary script and style files, to your web server.

6. Access the webpage, and you will see the local time displayed based on the specified time zone.

**Note:** This script was originally created to display the local office hours on a website hosted on a server located in a different time zone. It provides a workaround to accurately show the local time for such scenarios.

## Example Page

Included in this repository is an example page that demonstrates a full-screen clock with the local time. You can use it as a starting point or adapt it to your website design. Feel free to customize the layout, colors, and other aspects to fit your desired aesthetic.

## Contributors

- [Daniel F. Wehleit](https://github.com/1xn)

Contributions are welcome! If you have any bug reports, feature requests, or improvements, please submit them via pull requests or issues. Let's collaborate and make this script even more versatile and user-friendly.

## License

This project is licensed under the [MIT License](LICENSE).
