/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  console.log('Current User in access.ts:', currentUser); // 打印 currentUser 信息
  const canAdmin = currentUser && currentUser.userRole === 1;
  console.log('Can access admin page:', canAdmin); // 打印权限判断结果
  return {
    canAdmin
  };
}
