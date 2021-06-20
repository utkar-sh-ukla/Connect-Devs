const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const concurrently = require('concurrently');

//@route    api/profile/me
//@desc   GET current users profile
//@access Public
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

//@route    POST api/profile
//@desc     Create or Update users profile
//@access   Private
router.post(
  '/',
  [
    auth,
    check('status', 'Status is required').not().isEmpty(),
    check('skills', 'Skills is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin,
    } = req.body;

    // Build Profile Object
    const ProfileFields = {};
    ProfileFields.user = req.user.id;
    if (company) ProfileFields.company = company;
    if (website) ProfileFields.website = website;
    if (location) ProfileFields.location = location;
    if (bio) ProfileFields.bio = bio;
    if (status) ProfileFields.status = status;
    if (githubusername) ProfileFields.githubusername = githubusername;
    if (skills) {
      ProfileFields.skills = skills.split(',').map((skill) => skill.trim());
    }

    // Build social object
    ProfileFields.social = {};
    if (youtube) ProfileFields.social.youtube = youtube;
    if (twitter) ProfileFields.social.twitter = twitter;
    if (facebook) ProfileFields.social.facebook = facebook;
    if (linkedin) ProfileFields.social.linkedin = linkedin;
    if (instagram) ProfileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        // Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: ProfileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(ProfileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
    res.send('Hello');
  }
);
module.exports = router;
