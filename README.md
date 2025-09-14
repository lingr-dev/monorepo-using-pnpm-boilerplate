# monorepo-using-pnpm-biolerplate
---
[中文](README.zh-cn.md) | [English](README.md)

This is a biolerplate application, used for quickly establishing an enterprise frontend project using `PNPM`, in mono-repo style.

## Dependencies
> - `pnpm` as package manager
> - `vite` as universal build tool
> - `eslint` as application code lint tool
> - `prettier` as application code format tool

## Project Structure
```
packages
  ├── apps
  │   ├── demo
  ├── packages
  │   ├── demo-lib
```

## Project Description
- `apps` directory is the applications of the project, each application is a independent project, and the application can reference the library in `packages` directory.
- `packages` directory is the common libraries of the project, each library is a independent project, and the library can reference each other.

## Change Logs
- 2025-09-15 initial version

## Articles
- TODO: the author is writing...dadada

## Author
- **Author**: [Goy](https://github.com/lingr-dev)
- **Email**: [lingerer_dev@163.com](mailto:lingerer_dev@163.com)
- **Homepage**: [https://lingerer.cn](https://lingerer.cn)
- **WeChat Official Accounts**:
  
  ![WeChat Official Accounts](https://img-xs.lingerer.cn/info/qrcode_for_offcial_account.jpg)

## License
- This project is open source under the `MIT` license, you can freely use, modify and distribute the code of this project under the premise of compliance with the license.

## Contribution
- Welcome to submit `issue` or `pull request` to improve this project.
