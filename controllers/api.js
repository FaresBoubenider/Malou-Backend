import axios from "axios";

export const getPosts = async (req, res) => {
  try {

    // Verification that the parameter 'day' is given.
    if (!req.query.day) {
      res.status(400).json({ message: "Parameter 'day' is required" });
      return;
    }

    // Verification that the date is correct + error handling.
    const dateValidation = validateDateFormat(req.query.day);

    if (dateValidation.error == true) {
      res.status(400).json({ message: dateValidation.errorMessage });
      return;
    }

    // ProductHunt request in a trycatch to handle the APi's errors.
    let apiResponse;
    //Request the api to receive all products at a given date 
    try {
      apiResponse = await axios.get(
        `https://api.producthunt.com/v1/posts?day=${req.query.day}`,
        {
          headers: {
            Authorization: "Bearer " + process.env.API_TOKEN,
          },
        }
      );
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      return;
    }

    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const validateDateFormat = (day) => {
  if (!day.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g)) {
    return { error: true, errorMessage: "Invalid date format" };
  }
  if (day.split("-")[1] > 12)
    return { error: true, errorMessage: "Month number must not exceed 12" };

  if (day.split("-")[2] > 31)
    return { error: true, errorMessage: "Day number must not exceed 31" };

  return { error: false };
};

export const getProductCategorie = async (req, res) => {
  try {

    // ProductHunt request in a trycatch to handle the APi's errors.
    let apiResponse;
    //Request the api in order to receive all topics of all products
    try {
      apiResponse = await axios.get(`https://api.producthunt.com/v1/topics`, {
        headers: {
          Authorization: "Bearer " + process.env.API_TOKEN,
        },
      });
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
      return;
    }
    res.status(200).json(apiResponse.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
