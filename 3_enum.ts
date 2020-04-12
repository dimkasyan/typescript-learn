enum MemberShip {
    Simple,
    Standart,
    Premium
}

const membership = MemberShip.Standart;
const membershipReverse = MemberShip[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    Vk = 'Vk',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const socialMedia = SocialMedia.INSTAGRAM;
console.log(socialMedia);
