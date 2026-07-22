export interface FileNode {
  type: "file";
  name: string;
  path: string;
}

export interface FolderNode {
  type: "folder";
  name: string;
  path: string;
  children: FileSystemNode[];
}

export type FileSystemNode = FileNode | FolderNode;
