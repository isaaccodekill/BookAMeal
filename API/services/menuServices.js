import Menu from '../models/menu';
import Caterer from '../models/caterer';

class menuService {
  static getMenu(req, res) {
    Menu.findAll({ include: [Caterer] })
      .then(menu => res.status(200).json({
        status: 'successful',
        menu: menu[0],
      }))
      .catch(error => res.status(400).json({
        status: 'unsuccesful',
        error,
      }));
  }

  static createAndSaveMenu(req, res) {
    Menu.create({
      // chefId: req.caterer.id,
      MenuItems: req.body.MenuItems,
    }, {
      include: [{
        model: Caterer,
      }],
    })
      .then(menu => res.status(200).json({
        status: 'successful',
        menu,
      }))
      .catch(error => res.status(400).json({
        status: 'unsuccesful',
        error,
      }));
  }

  static editMenu(req, res) {
    Menu.update({
      // chefId: req.user.id,
      MenuItems: req.body.MenuItems,
    }, { where: { id: 1 } })
      .then((menu) => {
        return res.status(200).json({
          status: 'successful',
          message: 'menu was edited',
          menu,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          status: 'unsuccesful',
          error,
        });
      });
  }
}

export default menuService;
