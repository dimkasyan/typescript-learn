var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standart"] = 1] = "Standart";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
var membership = MemberShip.Standart;
var membershipReverse = MemberShip[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Vk"] = "Vk";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var socialMedia = SocialMedia.INSTAGRAM;
console.log(socialMedia);
