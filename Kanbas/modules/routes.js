import * as dao from "./dao.js";
function ModuleRoutes(app) {
  const getModules = async (req, res) => {
    const modules = await dao.findModuleByCourse(req.params.cid);
    res.send(modules);
  };

  app.get("/api/courses/:cid/modules", getModules);

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const module = req.body;
    module.course = cid;
    const newModule = await dao.createModule(module);
    res.send(newModule);
  };

  app.post("/api/courses/:cid/modules", createModule);

  const deleteModule = async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(204);
  };

  app.delete("/api/modules/:mid", deleteModule);

  const updateModule = async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  };

  app.put("/api/modules/:mid", updateModule);
}
export default ModuleRoutes;
