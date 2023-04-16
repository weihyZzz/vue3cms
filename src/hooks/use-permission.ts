import { useStore } from '@/store'

export function usePermission(pageName: string, handleName: string) {
  // 来确定 名为pageName的页面，是否有handleName的权限
  // 权限列表的每一项 格式为 system:users:create
  const store = useStore()
  const permissions = store.state.login.permissions
  // 对权限拼接
  const verifyPermission = `system:${pageName}:${handleName}`

  //  !!用法:
  //  name = "system:users:create"
  //  !name = false
  //  !!name = true
  return !!permissions.find((item) => item === verifyPermission)
}
