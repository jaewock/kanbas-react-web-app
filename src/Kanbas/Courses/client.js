import axios from "axios";

export const findAllCourses = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_BASE}/courses`);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_BASE}/courses/${courseId}`
  );
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_BASE}/courses`,
    course
  );
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(
    `${process.env.REACT_APP_API_BASE}/courses/${course._id}`,
    course
  );
  return response.data;
};
