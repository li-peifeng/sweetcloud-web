import { createLocalStorage } from "@solid-primitives/storage"
import { isMobile } from "~/utils/compatibility"
const [local, setLocal, { remove, clear, toJSON }] = createLocalStorage()

export const initialLocalSettings = [
  {
    key: "aria2_rpc_url",
    default: "https://127.0.0.1:443/jsonrpc",
  },
  {
    key: "aria2_rpc_secret",
    default: "",
  },
  {
    key: "position_of_header_navbar",
    default: "static",
    type: "select",
    options: ["static", "sticky", "only_navbar_sticky"],
  },
  {
    key: "global_default_layout",
    default: "grid",
    type: "select",
    options: ["list", "grid", "image"],
  },
  {
    key: "show_folder_in_image_view",
    default: "top",
    type: "select",
    options: ["top", "bottom", "none"],
  },
  {
    key: "show_sidebar",
    default: "none",
    type: "select",
    options: ["none", "visible"],
  },
  {
    key: "grid_item_size",
    default: "90",
    type: "number",
  },
  {
    key: "list_item_filename_overflow",
    default: "scrollable",
    type: "select",
    options: ["ellipsis", "scrollable", "multi_line"],
  },
  {
    key: "open_item_on_checkbox",
    default: "direct",
    type: "select",
    options: () =>
      isMobile
        ? ["direct", "disable_while_checked"]
        : ["direct", "disable_while_checked", "with_alt", "with_ctrl"],
  },
  {
    key: "select_with_mouse",
    default: "disabled",
    type: "select",
    options: ["disabled", "open_item_with_dblclick"],
    hidden: isMobile,
  },
]

export type LocalSetting = (typeof initialLocalSettings)[number]
for (const setting of initialLocalSettings) {
  if (!local[setting.key]) {
    setLocal(setting.key, setting.default)
  }
}

export { local, setLocal, remove, clear, toJSON }
