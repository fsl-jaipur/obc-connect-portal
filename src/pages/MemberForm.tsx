import { useState, ChangeEvent, FormEvent } from "react";

interface MemberFormData {
  memberName: string;
  fatherName: string;
  businessNature: string;
  organizationPosition: string;
  residenceAddress: string;
  officeAddress: string;
  residencePhone: string;
  mobile: string;
  email: string;
  aadhaar: string;
  education: string;
  dob: string;
  marriageDate: string;
  bloodGroup: string;
  tshirtSize: string;
  socialWork: string;
  specialAchievement: string;
}

const MemberForm: React.FC = () => {

  const [form, setForm] = useState<MemberFormData>({
    memberName: "",
    fatherName: "",
    businessNature: "",
    organizationPosition: "",
    residenceAddress: "",
    officeAddress: "",
    residencePhone: "",
    mobile: "",
    email: "",
    aadhaar: "",
    education: "",
    dob: "",
    marriageDate: "",
    bloodGroup: "",
    tshirtSize: "",
    socialWork: "",
    specialAchievement: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("फॉर्म सफलतापूर्वक जमा हो गया");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto bg-white border shadow">

        <h1 className="text-center font-bold text-xl py-4 border-b">
          सदस्यता आवेदन पत्र
        </h1>

        <form onSubmit={handleSubmit}>

          <table className="w-full border border-gray-400 text-sm">

            <tbody>

            <tr>
  <td className="border p-2 w-1/3">
    1. सदस्य का नाम
  </td>
  <td className="border p-2">
    <input
      name="memberName"
      placeholder="श्री/श्रीमति/"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
    />
  </td>
</tr>

<tr>
  <td className="border p-2">
    2. पिता/पति का नाम
  </td>
  <td className="border p-2">
    <input
      name="fatherName"
      placeholder="श्री"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
    />
  </td>
</tr>

<tr>
  <td className="border p-2">
    3. व्यवसाय/व्यवसाय की प्रकृति
  </td>
  <td className="border p-2">
    <input
      name="businessNature"
      placeholder="जैसे: व्यापार, नौकरी, सेवा, किसान आदि"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
    />
  </td>
</tr>

<tr>
  <td className="border p-2">
    4. संगठन में स्थिति
  </td>
  <td className="border p-2">
    <input
      name="organizationPosition"
      placeholder="जैसे: सदस्य, पदाधिकारी, अध्यक्ष आदि"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
    />
  </td>
</tr>

<tr>
  <td className="border p-2">
    5. निवास का पता
  </td>
  <td className="border p-2">
    <textarea
      name="residenceAddress"
      placeholder="पूरा निवास पता लिखें (गली, शहर, जिला, पिन कोड)"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
      rows={3}
    />
  </td>
</tr>

<tr>
  <td className="border p-2">
    6. व्यवसाय / ऑफिस का पता
  </td>
  <td className="border p-2">
    <textarea
      name="officeAddress"
      placeholder="ऑफिस या व्यवसाय का पूरा पता लिखें"
      onChange={handleChange}
      className="w-full outline-none placeholder-gray-400"
      rows={3}
    />
  </td>
</tr>


<tr>
  <td className="border p-2 align-top">
    7. सम्पर्क सूत्र

    <div className="mt-4 space-y-4 text-sm">

      <div>निवास</div>

      <div>मोबाइल</div>

      <div>ई-मेल</div>

      <div>आधार नम्बर</div>

    </div>
  </td>

  {/* LEFT COLUMN INPUTS */}
  <td className="border p-2 align-top">

    <div className="space-y-3">

      <input
        name="residencePhone"
        placeholder="निवास नम्बर"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

      <input
        name="mobile"
        placeholder="मोबाइल नम्बर"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

      <input
        name="email"
        placeholder="ई-मेल"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

      <input
        name="aadhaar"
        placeholder="आधार नम्बर"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

    </div>

  </td>

  {/* RIGHT COLUMN INPUTS */}
  <td className="border p-2 align-top">

    <div className="space-y-3">

      <input
        name="officePhone"
        placeholder="ऑफिस"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

      <input
        name="whatsapp"
        placeholder="व्हाट्सएप नम्बर"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

      <input
        name="pan"
        placeholder="पैन नम्बर"
        onChange={handleChange}
        className="w-full outline-none border-b"
      />

    </div>

  </td>

</tr>


              <tr>
                <td className="border p-2">
                  8. शैक्षणिक योग्यता एवं प्रशिक्षण कम्प्यूटर उपलब्धि
                </td>
                <td className="border p-2">
                  <input name="education" onChange={handleChange} className="w-full outline-none"/>
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  9. जन्म दिनांक
                </td>
                <td className="border p-2">
                  <input type="date" name="dob" onChange={handleChange} className="outline-none"/>
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  10. वैवाहिक वर्षगांठ
                </td>
                <td className="border p-2">
                  <input type="date" name="marriageDate" onChange={handleChange} className="outline-none"/>
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  11. रक्त समूह / टी-शर्ट साइज
                </td>
                <td className="border p-2 space-y-2">

                  <input
                    name="bloodGroup"
                    placeholder="रक्त समूह"
                    onChange={handleChange}
                    className="w-full outline-none border-b"
                  />

                  <input
                    name="tshirtSize"
                    placeholder="टी-शर्ट साइज"
                    onChange={handleChange}
                    className="w-full outline-none border-b"
                  />

                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  12. अन्य सामाजिक एवं धार्मिक गतिविधियों के बारे में विवरण
                </td>
                <td className="border p-2">
                  <textarea name="socialWork" onChange={handleChange} className="w-full outline-none"/>
                </td>
              </tr>

              <tr>
                <td className="border p-2">
                  13. अन्य कोई विशेष उपलब्धि
                </td>
                <td className="border p-2">
                  <textarea name="specialAchievement" onChange={handleChange} className="w-full outline-none"/>
                </td>
              </tr>

            </tbody>

          </table>

          <div className="text-center py-6">
            <button className="bg-green-600 text-white px-8 py-3 rounded">
              सदस्य बनें
            </button>
          </div>

        </form>

      </div>

    </div>
  );
};

export default MemberForm;
