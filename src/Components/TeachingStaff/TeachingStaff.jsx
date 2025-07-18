import React, { useState } from "react";
import teacherPhoto from "../../assets/teacheravt1.png";
import teacher1 from "../../assets/Shal1.png";
import teacher2 from "../../assets/Shal2.png";
import teacher3 from "../../assets/Shal3.png";
import teacher4 from "../../assets/Shal10.png";
import teacher5 from "../../assets/Shal5.png";
import teacher6 from "../../assets/Shal6.png";
import teacher7 from "../../assets/Shal10.png";
import teacher8 from "../../assets/Shal7.png";





const staffMembers = [
  { name: "Mr. Deepak k Bhattacharya", photo: teacher8, subject: "Mathematics",desc:"(D.EL.Ed)" },
  { name: "Mr. Santosh k Gupta", photo: teacher6, subject: "Science",desc:"(D.EL.Ed)" },
  { name: "Md. Sami Ullah", photo: teacher5, subject: "SST", desc:"(B.Ed)"},
  { name: "Mr. LB.Mishra", photo: teacher4, subject: "Hindi/Sanskrit",desc:"(Pracharya)" },
  { name: "Mr. Anand pal", photo: teacher3, subject: "Computer",desc:"(ADCA)" },
  { name: " Shalini Kumari", photo: teacher1, subject: "Science",desc:"(D.EL.ED)" },
  { name: "Mrs. Falak Khatun", photo: teacher7, subject: "English",desc:"deled" },
  { name: "Mr Shalni Kumari", photo: teacherPhoto, subject: "Mathematics",desc:"deled" },
  { name: "Mrs. Sonali Pandey ", photo: teacherPhoto, subject: "Hindi" },
  { name: "Mrs.Deepa Kumari", photo: teacherPhoto, subject: "English" },
  { name: "Mrs. Anuskha Kumari", photo: teacherPhoto, subject: "Science" },
  { name: "Mrs. Palak Kumari", photo: teacherPhoto, subject: "Physical Education" },
  { name: "Mrs Aradhya Kumari", photo: teacherPhoto, subject: "All Subject" },
  { name: "Mrs Purnima Pandey", photo: teacherPhoto, subject: "All Subject" },
  { name: "Mrs. Kajal Kumari", photo: teacherPhoto, subject: "All Subject" },
  { name: "Mr. Ranjit Rawat", photo: teacherPhoto, subject: "Accountent" },
  { name: "Mrs. Poonam Singh", photo: teacherPhoto, subject: "Hindi" },
  { name: "Mr. Arjun Nair", photo: teacherPhoto, subject: "Computer Applications" },
  { name: "Ms. Meenal Roy", photo: teacherPhoto, subject: "General Knowledge" },
  { name: "Mr. Abhishek Sethi", photo: teacherPhoto, subject: "Music" },
];

const TeachingStaff = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
        👩‍🏫 Our Teaching Staff
      </h2> <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl flex flex-col items-center justify-center text-center p-6 hover:shadow-xl transition"
          >
            <img
              src={staff.photo}
              alt={staff.name}
              onClick={() => setSelectedImage(staff.photo)}
              className="w-32 h-32 object-cover rounded-xl mb-4 border-4 border-white cursor-pointer hover:scale-105 transition"
            />
            <h3 className="text-lg font-semibold text-gray-800">{staff.name}</h3>
            <p className="text-sm text-gray-600">{staff.subject}</p>
            <p className="text-sm text-gray-600">{staff.desc}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Teacher Full"
            className="max-w-full max-h-[90%] rounded-lg border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default TeachingStaff;
