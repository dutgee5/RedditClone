import { View, Text, Image, StyleSheet } from "react-native";
import { formatDistanceToNowStrict } from "date-fns";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      {/* Header */}

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image source={{ uri: post.group.image }} style={styles.image} />
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>
        <View style={{ marginLeft: "auto" }}>
          <Text style={styles.joinButtonText}>Join</Text>
        </View>
      </View>

      {/* Post */}
      <View>
        <Text style={styles.postTitle}>{post.title}</Text>
        {post.image && ( // burada image varsa image yoksa description var
          <Image
            source={{ uri: post.image }}
            style={{ width: "100%", aspectRatio: 4 / 3, borderRadius: 15 }}
          />
        )}
        {!post.image &&
          post.description && ( // burada image yoksa description var
            <Text numberOfLines={4}>{post.description}</Text>
          )}
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="arrow-up-bold-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.upvotes}
            </Text>
            <View
              style={{
                width: 1,
                backgroundColor: "#D4D4D4",
                height: 14,
                marginHorizontal: 7,
                alignSelf: "center",
              }}
            />
            <MaterialCommunityIcons
              name="arrow-down-bold-outline"
              size={19}
              color="black"
            />
          </View>
          <View style={[{ flexDirection: "row" }, styles.iconBox]}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={19}
              color="black"
            />
            <Text
              style={{ fontWeight: "500", marginLeft: 5, alignSelf: "center" }}
            >
              {post.nr_of_comments}
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
          <MaterialCommunityIcons
            name="trophy-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
          <MaterialCommunityIcons
            name="share-outline"
            size={19}
            color="black"
            style={styles.iconBox}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  joinButtonText: {
    backgroundColor: "#0d469b",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  image: { width: 20, height: 20, borderRadius: 20 },
  postTitle: {
    fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
