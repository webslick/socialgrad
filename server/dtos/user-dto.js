module.exports = class UserDto {
  email;
  userId;
  isActivated;
  role;

  constructor(model) {
    this.email = model.email;
    this.userId = model.id;
    this.isActivated = model.isActivated;
    this.role = model.role;
  }

}