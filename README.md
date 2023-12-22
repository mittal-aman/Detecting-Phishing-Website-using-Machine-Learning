# Phishing-Websites-Classification-using-Deep-Learning
A detailed comparison of performance scores achieved by Machine Learning and Deep Learning algorithms on 3 different Phishing datasets. 3 different feature selection and 2 different dimensionality reduction techniques are used for comparison.
More than 97% accuracy achieved using the proposed technique.

## Overview

This repository contains the source code and supporting documents for a Chrome extension designed to detect phishing URLs using machine learning.

### PhishingChromeExtension

- **Purpose**: Contains the Chrome extension code which sends URLs to a FastAPI backend and uses a Random Forest model to predict whether a URL is a phishing attempt or not.

### Plots

- **Content**: Includes visualizations for three datasets tested with five different classifiers and one neural network to analyze the performance and accuracy of the phishing detection.

### Reference Papers

- **Description**: A collection of reference papers that provided foundational research and methodologies for our project.

### Code_With_Result.pdf

- **Details**: A PDF document of the Jupyter notebook (`ML_CYBER_SEC_FINAL_PROJECT.ipynb`) with all code cells executed and results displayed.

### Datasets

- **Data Files**: Three CSV files containing the data used for training and testing our models.

### Final_Project_Report.pdf

- **Summary**: The comprehensive final report detailing the project's scope, methodology, results, and conclusions.

### ML_CYBER_SEC_FINAL_PROJECT.ipynb

- **Functionality**: The complete Jupyter notebook with code to train machine learning classifiers on three datasets using algorithms like DecisionTree, SVM, RandomForest, NaiveBayes, KNeighbors, and a Neural Network to predict phishing URLs.

## Usage

To use the Chrome extension:

1. Install the extension in your Chrome browser.
2. Navigate to any website.
3. The extension will automatically send the current URL to the FastAPI service and display a prediction.

For more detailed instructions on installation and usage, please refer to the individual documents within each folder.


## License

This project is licensed under the [MIT License](LICENSE.md). Please see the `LICENSE.md` file for more details.

## Contact

For any further queries or issues, please open an issue on this repository or contact the maintainers directly.
Aman Mittal - am11982@nyu.edu
Karan Vohra - kv2154@nyu.edu
Parth Mehta - pjm9767@nyu.edu
Siddharth Shah - ss16130@nyu.edu

---

Thank you for checking out our project on phishing detection using machine learning!
