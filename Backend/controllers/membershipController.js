import Membership from "../models/membershipModel.js";

export const createMembership = async (req, res) => {

  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {

      return res.status(400).json({
        success: false,
        message: "Profile image required"
      });

    }

    const membership = new Membership({

      memberName: req.body.memberName,
      fatherName: req.body.fatherName,

      businessNature: req.body.businessNature,
      organizationPosition: req.body.organizationPosition,

      residenceAddress: req.body.residenceAddress,
      officeAddress: req.body.officeAddress,

      residencePhone: req.body.residencePhone,
      officePhone: req.body.officePhone,

      mobile: req.body.mobile,
      whatsapp: req.body.whatsapp,

      email: req.body.email,

      pan: req.body.pan,
      aadhaar: req.body.aadhaar,

      education: req.body.education,
      otherEducation: req.body.otherEducation,

      // ✅ Correct date conversion
      dob: req.body.dob ? new Date(req.body.dob) : null,

      marriageDate: req.body.marriageDate
        ? new Date(req.body.marriageDate)
        : null,

      bloodGroup: req.body.bloodGroup,
      tshirtSize: req.body.tshirtSize,

      socialWork: req.body.socialWork,
      specialAchievement: req.body.specialAchievement,

      membershipType: req.body.membershipType,

      membershipFee: req.body.membershipFee
        ? parseInt(req.body.membershipFee)
        : 200,

      state: req.body.state,
      district: req.body.district,

      // ✅ Cloudinary image URL save होगा
      image: req.file.path

    });

    await membership.save();

    res.status(201).json({

      success: true,
      message: "Membership saved successfully",
      data: membership

    });

  }

  catch (error) {

    console.error("Error:", error);

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};